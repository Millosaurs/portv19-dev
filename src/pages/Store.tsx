import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ShoppingBag, Star, Download } from "lucide-react";
import "../index.css";
import { Link } from "react-router-dom";
import { storeItems } from "@/assets/storeItems";
import Footer from "@/components/Footer";

interface StoreItemProps {
    title: string;
    price: string;
    imageUrl: string;
    description: string;
    link?: string;
    featured?: boolean;
}

const StoreItem = ({
    title,
    price,
    imageUrl,
    description,
    link,
    featured = false,
}: StoreItemProps) => {
    const content = (
        <div className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] group">
            <div className="h-64 overflow-hidden bg-background-card rounded-3xl relative">
                {featured && (
                    <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-orange-500/90 text-white text-xs font-medium rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                        </span>
                    </div>
                )}
                <img
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                        {title}
                    </h3>
                    <span className="text-green-500 font-bold text-lg">
                        {price}
                    </span>
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {description}
                </p>
                <Button className="w-full py-3 bg-white text-black hover:bg-background-primary hover:text-white rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
                    <ShoppingBag size={16} />
                    <span>View Details</span>
                    <ArrowRightIcon
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </Button>
            </div>
        </div>
    );

    if (link) {
        return (
            <Link to={link} className="w-full">
                {content}
            </Link>
        );
    }

    return content;
};

export default function Store() {
    const filteredItems = storeItems;

    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-orange-500 text-xs mb-3 md:mb-4">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                                Digital Products
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-3">
                                Store
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400">
                                Premium digital products and resources for
                                developers
                            </p>
                        </div>
                        <div className="text-sm text-gray-400 mt-8">
                            {filteredItems.length}{" "}
                            {filteredItems.length === 1
                                ? "product"
                                : "products"}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div
                    className="grid grid-cols-3 gap-4 mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "100ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <div className="bg-background-card p-4 md:p-6 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                        <Download className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-blue-400" />
                        <div className="text-xl md:text-3xl font-bold text-white mb-1">
                            100+
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                            Downloads
                        </div>
                    </div>
                    <div className="bg-background-card p-4 md:p-6 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                        <Star className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-yellow-400" />
                        <div className="text-xl md:text-3xl font-bold text-white mb-1">
                            4.9
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                            Avg Rating
                        </div>
                    </div>
                    <div className="bg-background-card p-4 md:p-6 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                        <ShoppingBag className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-green-400" />
                        <div className="text-xl md:text-3xl font-bold text-white mb-1">
                            {storeItems.length}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                            Products
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-8 md:my-12">
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            className="animate-in fade-in slide-in-from-bottom-4"
                            style={{
                                animationDelay: `${200 + index * 100}ms`,
                                animationFillMode: "backwards",
                            }}
                        >
                            <StoreItem
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                description={item.description}
                                link={item.link}
                                featured={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-16 md:py-24">
                        <ShoppingBag className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                        <h3 className="text-2xl font-medium text-gray-400 mb-2">
                            No products found
                        </h3>
                        <p className="text-gray-500">
                            Check back soon for new items!
                        </p>
                    </div>
                )}

                {/* Custom Development Section */}
                <div
                    className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 p-6 md:p-10 rounded-3xl mb-12 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "400ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                Custom Development Services
                            </h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Need something custom-built for your project? I
                                offer tailored development services including
                                full-stack applications, UI/UX design, and
                                performance optimization.
                            </p>
                            <Link to="/contact">
                                <Button className="group py-3 md:py-4 px-6 md:px-8 text-sm md:text-base bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white transition-all duration-300 hover:scale-105">
                                    <span>Get in Touch</span>
                                    <ArrowRightIcon
                                        className="-me-1 transition-transform group-hover:translate-x-0.5"
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-background-card/50 p-6 md:p-8 rounded-3xl">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                What I Offer:
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-orange-500 text-sm">
                                            ✓
                                        </span>
                                    </div>
                                    <span>
                                        Custom web application development
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-orange-500 text-sm">
                                            ✓
                                        </span>
                                    </div>
                                    <span>UI/UX design and implementation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-orange-500 text-sm">
                                            ✓
                                        </span>
                                    </div>
                                    <span>
                                        Performance optimization & debugging
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-orange-500 text-sm">
                                            ✓
                                        </span>
                                    </div>
                                    <span>
                                        Code review and architecture
                                        consultation
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
