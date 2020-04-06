import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita eius et maiores ipsum aut deserunt eligendi tempore nam reprehenderit quidem incidunt deleniti repellat beatae, veritatis quis praesentium enim consectetur libero? Ex, quasi. Rerum quo labore ex earum quasi perspiciatis, commodi maxime sapiente magni laboriosam eveniet, aperiam animi necessitatibus unde?
                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
