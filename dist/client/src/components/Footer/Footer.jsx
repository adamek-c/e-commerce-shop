"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logo_png_1 = __importDefault(require("../../assets/logo.png"));
const facebook_svg_1 = __importDefault(require("../../assets/facebook.svg"));
const youtube_svg_1 = __importDefault(require("../../assets/youtube.svg"));
const twitter_svg_1 = __importDefault(require("../../assets/twitter.svg"));
const Footer = () => (<footer className="mt-12 bg-[#F9F9F9] ">
		<div className="py-24 max-w-screen-xl mx-auto p-8">
			<div className="flex flex-col sm:flex-row">
				<div className="flex-1">
					<img src={logo_png_1.default} alt="company logo"/>
					<p className="mt-8 text-xl max-w-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						harum corporis, quam consequuntur magni nostrum dolore alias rerum,
						sapiente est eveniet quisquam labore placeat suscipit quasi non
						praesentium quod? Fugit.
					</p>
				</div>
				<hr className="my-8"/>
				<div className="flex-1 flex space-x-10 self-center justify-end">
					<img src={facebook_svg_1.default} alt="facebook link" className="w-16 lg:w-20 cursor-pointer  p-2 hover:scale-95 transition"/>
					<img src={youtube_svg_1.default} alt="youtube link" className="w-16  lg:w-20 cursor-pointer  p-2 hover:scale-95 transition"/>
					<img src={twitter_svg_1.default} alt="twitter link" className="w-16 lg:w-20 cursor-pointer  p-2 hover:scale-95 transition"/>
				</div>
			</div>
			<div className="flex-1 text-center mt-16 text-lg">
				<h2>All rights reserved &#169; 2022</h2>
			</div>
		</div>
	</footer>);
exports.default = Footer;
