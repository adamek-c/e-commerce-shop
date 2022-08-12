"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const components_1 = require("../components");
const filterSlice_1 = require("../features/Filter/filterSlice");
const Home = () => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [width, setWidth] = (0, react_1.useState)(window.innerWidth);
    const dispatch = (0, react_redux_1.useDispatch)();
    const books = (0, react_redux_1.useSelector)((state) => state.filter.items);
    const { pending } = (0, react_redux_1.useSelector)((state) => state.filter);
    const { error } = (0, react_redux_1.useSelector)((state) => state.filter);
    (0, react_1.useEffect)(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    (0, react_1.useEffect)(() => {
        if (pending === "idle") {
            dispatch((0, filterSlice_1.getBooks)());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let content;
    if (pending === "loading") {
        content = <components_1.Loading />;
    }
    if (pending === "succeeded") {
        content = (<components_1.ErrorBoundary>
				<main className=" overflow-hidden">
					<components_1.Container>
						<div className="px-8 flex flex-col lg:flex-row gap-8">
							<div className="relative">
								<h2 className="text-3xl tracking-wider flex cursor-pointer lg:cursor-auto w-max mt-12" onClick={() => setOpen(!open)} aria-hidden="true">
									Category
									<span className="ml-2 lg:hidden">
										<span className={`${open ? "rotate-180" : "rotate-0"} material-symbols-outlined transition`}>
											expand_more
										</span>
									</span>
								</h2>
								<components_1.Filter open={open} width={width}/>
							</div>

							<div className="grid gap-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 my-12 w-full justify-items-center">
								{books.map((book) => (<components_1.Books key={book.id} {...book}/>))}
							</div>
						</div>
					</components_1.Container>
				</main>
				<components_1.Footer />
			</components_1.ErrorBoundary>);
    }
    if (pending === "failed") {
        content = <components_1.ErrorMessage error={error}/>;
    }
    return <section>{content}</section>;
};
exports.default = Home;
