import { render, screen } from "@testing-library/react"
import AddReview from "./AddReview"

test('render review form', () => {
    render(<AddReview/>)
    screen.debug();
})