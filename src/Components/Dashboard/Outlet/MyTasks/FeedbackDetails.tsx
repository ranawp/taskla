import React from 'react';

const FeedbackDetails = ({ feedbackModal } : any) => {
    console.log(feedbackModal.mark)
    return (
        <div>
            <input type="checkbox" id="feedback-details" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="feedback-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">FeedBack of this task</h3>
                    <p className="py-4">Description:{feedbackModal?.scriptfeedback
                    } </p>

                </div>
            </div>

        </div>
    );
};

export default FeedbackDetails;
// https://cryptic-stream-86241.herokuapp.com/