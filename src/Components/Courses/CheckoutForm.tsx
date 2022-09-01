import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setcardError] = useState<string>('')
    const [cardsuccess, setcardSuccess] = useState<string>('')
    const [clientSecret, setClientSecret] = useState<string>('')
    const [user] = useAuthState(auth)
    const email: string | null | undefined = user?.email
    const displayName: string | null | undefined = user?.displayName




    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price: 100 })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        const { error, paymentMethod }: any = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            // console.log('[error]', error)
            setcardError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod)
            setcardError('')
        }
        setcardSuccess('')

        const { paymentIntent, error: intentError }: any = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: displayName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setcardError(intentError?.message)

        } else {
            setcardError('')
            console.log(paymentIntent)
            setcardSuccess('congrats! your payment is completed')
            if (paymentIntent) {
                fetch(` http://localhost:5000/user/enroll/${email}`, {
                    method: 'PUT'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast('your enrollment pending')
                        }
                    })

            }
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',

                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='bg-sky-500 ml-30 cursor rounded mt-3 px-6 py-4 ml-10' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                cardsuccess && <p className='text-green-500'>{cardsuccess}</p>
            }
        </>
    );
};

export default CheckoutForm;