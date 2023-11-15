import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";

function Footer() {
    return (
        <footer className="flex flex-col gap-2 mt-5 p-5 bg-gray-900 text-white">
            <div className="text-lg font-bold mb-7">For brand partnership, contact us at:</div>
            <div className="flex flex-wrap gap-5 items-center">
                <Mail />
                <a href="mailto:collab@terriblytinytales.com">collab@terriblytinytales.com</a>
            </div>
            <div className="flex flex-wrap gap-5 items-center">
                <Phone />
                <a href="tel:+918879294257">+91 8879294257</a>
            </div>
            <div className="flex flex-wrap items-center my-7 gap-5">
                <div className="inline-flex mr-auto gap-5 items-center text-gray-300 flex-wrap">
                    <img src="/images/ttt.svg" width={30} height={30} alt="Terribly Tiny Tales" />
                    <span className="">© 2022 Terribly Tiny Ventures Pvt. Ltd.</span>
                    <a href="https://www.terriblytinytales.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    <a href="https://www.terriblytinytales.com/tos" target="_blank" rel="noopener noreferrer">Terms Of Use</a>
                </div>
                <div className="inline-flex gap-5 items-center">
                    <a aria-label="Facebook" href="https://www.facebook.com/terriblytinytales/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                    <a aria-label="Twitter" href="https://twitter.com/terriblytiny" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                    <a aria-label="Youtube" href="https://www.youtube.com/c/TerriblyTinyTales" target="_blank" rel="noopener noreferrer"><Youtube /></a>
                    <a aria-label="Instagram" href="https://www.instagram.com/ttt_official" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                </div>
            </div>

            <div className="text-center border-t border-t-gray-600 border-dashed pt-7 text-gray-500">
                <div className="">An assignment submitted by <a href="https://myoasis.tech" target="_blank" rel="noopener noreferrer">Shivam Dewangan</a> to <a href="https://www.terriblytinytales.com" target="_blank" rel="noopener noreferrer">Terribly Tiny Tales</a></div>
                <div className="text-sm mt-5">© 2023 • Terribly Tiny Tales • MyOasis Tech</div>
            </div>
        </footer>
    )
}

export default Footer;