import SectionTitle from '../../../Components/SectionTitle/SectionTitle'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}></SectionTitle>

            <article className='grid md:grid-cols-3'>
                <div className="card w-96  bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl mb-2">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96  bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl mb-2">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96  bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl mb-2">Caeser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ChefRecommends;