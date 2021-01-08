import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'

const Card = (props) => {
    return (
        <Router>
            <Link to={props.link}>
                <div class="flex-1 max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <img class="w-full" src={props.image} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">{props.title}</div>
                        <p class="text-grey-darker text-base text-center">
                        {props.content}
                        </p>
                    </div>
                </div>
            </Link>
        </Router>
    )
}

export default Card
