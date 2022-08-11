import React from 'react';

const FeedbackDetails = ({ feedbackModal, setTaskFeedback }) => {
    // console.log(setTaskFeedback)
    return (
        <div>
            <input type="checkbox" id="feedback-details" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="feedback-details" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">FeedBack of this task</h3>
                    <p class="py-4">Description: </p>

                </div>
            </div>

        </div>
    );
};

export default FeedbackDetails;