import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person } className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts } className="w-1/2 rounded-lg border-8 border-white shadow-2xl absolute right-5 top-1/2" />
                </div>
                
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h1 className="text-3xl font-bold text-orange-700">About us</h1>
                    <h1 className="text-3xl font-bold ">We are qualified experience in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;