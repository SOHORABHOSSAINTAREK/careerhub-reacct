import mySocial from './../../assets/icons/social.png'
const Footer = () => {
    return (
        <footer className="   p-10 bg-[#1A1919] text-white">
            <div className='footer justify-between max-w-7xl mx-auto'>
                <aside>
                    <h1 className="text-3xl font-semibold">CareerHub</h1>
                    <p className='my-5'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <div>
                        <img src={mySocial} alt="" />
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <hr />

            </div>
            <div className=' mt-6 max-w-7xl mx-auto md:flex text-base justify-between'>
                <h3>@2023 CareerHub. All Rights Reserved</h3>
                <h3>Developed by <a className='text-xl font-semibold text-blue-200' target='blank' href="https://github.com/SOHORABHOSSAINTAREK">Sohorab Hosain Tarek</a></h3>
            </div>
        </footer>
    );
};

export default Footer;