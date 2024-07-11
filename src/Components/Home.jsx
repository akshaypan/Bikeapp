import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
    return (
        <div>

<NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://imgs.search.brave.com/cy7ZDEBamATho6L4DsXeLDIdp8Je_cdUXX8hx8XQR0M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTA3NjUw/NC8yNzk5Mi9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzI3OTkyODIx/OC1zdG9jay1waG90/by1tb3RvcmJpa2Ut/b24tdGhlLXJvYWQt/cmlkaW5nLmpwZw" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://imgs.search.brave.com/wavaKpV3JfbAaqFhmOwq1xNIjUQgIGDI0Cynl8WgYG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzI2Lzg0Lzk4/LzM2MF9GXzIyNjg0/OTg1OV9WQzVzMUhw/MjRTVHNxbVg0ZU9K/cmh4aEtlTkhPRmR3/Yi5qcGc" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://imgs.search.brave.com/CMzQXwfaPmDHj9eA-fDAl4--wmgHpGJYqWqK3DMeTMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzc4Lzc0/LzM2MF9GXzQ2Mjc4/NzQ1OV94dlNldVNR/QUpET0hFTW8zYzNP/cmU2QU5MbktQZnBI/ZC5qcGc" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />

        </div>
    )
}

export default Home