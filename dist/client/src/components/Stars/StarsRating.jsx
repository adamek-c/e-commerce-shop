"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Box_1 = __importDefault(require("@mui/material/Box"));
const Rating_1 = __importDefault(require("@mui/material/Rating"));
const Star_1 = __importDefault(require("@mui/icons-material/Star"));
const StarsRating = ({ rated }) => (<Box_1.default sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        marginTop: "0.3rem",
    }}>
		<Rating_1.default name="text-feedback" value={rated} readOnly precision={0.5} emptyIcon={<Star_1.default style={{
            opacity: 0.55,
        }} fontSize="inherit"/>}/>
		<Box_1.default sx={{
        ml: 2,
    }}>
			{rated}
		</Box_1.default>
	</Box_1.default>);
exports.default = StarsRating;
