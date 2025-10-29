import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowLeftIcon,
    ShoppingCartIcon,
    CheckIcon,
    Download,
    Star,
    Shield,
    Zap,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { storeItemsDetailed } from "@/assets/storeItems";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
    "pk_test_51O8oBbSJQHZQOVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
);

// Payment form component
const CheckoutForm = ({
    item,
    onSuccess,
}: {
    item: StoreItemDetailProps;
    onSuccess: () => void;
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);
        setError(null);

        // In a real application, you would create a payment intent on your server
        // and return the client secret to complete the payment on the client side

        // This is a simplified example - in production, you'd call your backend
        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            setError("Card element not found");
            setProcessing(false);
            return;
        }

        // Simulate a successful payment for demo purposes
        // In a real app, you would use stripe.confirmCardPayment with a client secret
        setTimeout(() => {
            setProcessing(false);
            onSuccess();
        }, 2000);

        // Real implementation would look like this:
        /*
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message || "Payment failed");
      setProcessing(false);
    } else {
      // Send paymentMethod.id to your server to complete the payment
      // ...
      onSuccess();
    }
    */
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    Card Details
                </label>
                <div className="p-3 bg-background-primary rounded-2xl border border-gray-600">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#fa755a",
                                },
                            },
                        }}
                    />
                </div>
            </div>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <Button
                type="submit"
                disabled={!stripe || processing}
                className="w-full py-3 bg-white text-black hover:bg-gray-200 rounded-2xl flex items-center justify-center gap-2"
            >
                {processing ? (
                    <span className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                        Processing...
                    </span>
                ) : (
                    <>
                        <ShoppingCartIcon size={18} />
                        <span>Pay {item.price}</span>
                    </>
                )}
            </Button>
        </form>
    );
};

interface StoreItemDetailProps {
    id: string;
    title: string;
    price: string;
    numericPrice: number;
    imageUrl: string;
    description: string;
    features: string[];
    longDescription: string;
}

export default function StoreItemDetail() {
    const { itemId } = useParams<{ itemId: string }>();
    const [item, setItem] = useState<StoreItemDetailProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [purchaseComplete, setPurchaseComplete] = useState(false);

    useEffect(() => {
        // In a real app, you would fetch this data from an API
        // For now, we'll use a mock database

        const foundItem = storeItemsDetailed.find((item) => item.id === itemId);
        setItem(foundItem || null);
        setLoading(false);
    }, [itemId]);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-background-main">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading product details...</p>
                </div>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center animate-in fade-in slide-in-from-bottom-4">
                    <ShoppingCartIcon className="w-20 h-20 mx-auto text-gray-600 mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Product Not Found
                    </h1>
                    <p className="text-gray-400 mb-8 text-lg">
                        The product you're looking for doesn't exist or has been
                        removed.
                    </p>
                    <Link to="/store">
                        <Button className="bg-white text-black hover:bg-background-primary hover:text-white rounded-2xl py-3 px-6 transition-all duration-300 hover:scale-105">
                            <ArrowLeftIcon size={16} className="mr-2" />
                            Return to Store
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <Link
                    to="/store"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors animate-in fade-in slide-in-from-bottom-4"
                >
                    <ArrowLeftIcon size={16} className="mr-2" />
                    Back to Store
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Product Image */}
                    <div
                        className="animate-in fade-in slide-in-from-bottom-4"
                        style={{
                            animationDelay: "100ms",
                            animationFillMode: "backwards",
                        }}
                    >
                        <div className="bg-gradient-to-br from-background-card to-background-primary/30 rounded-3xl overflow-hidden h-[400px] md:h-[600px] flex items-center justify-center p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all duration-300">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-cover shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "/placeholder.svg";
                                }}
                            />
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="bg-background-card p-4 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                                <Shield className="w-6 h-6 mx-auto mb-2 text-green-400" />
                                <p className="text-xs text-gray-400">
                                    Secure Payment
                                </p>
                            </div>
                            <div className="bg-background-card p-4 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                                <Download className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                                <p className="text-xs text-gray-400">
                                    Instant Download
                                </p>
                            </div>
                            <div className="bg-background-card p-4 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                                <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                                <p className="text-xs text-gray-400">
                                    Fast Updates
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div
                        className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4"
                        style={{
                            animationDelay: "200ms",
                            animationFillMode: "backwards",
                        }}
                    >
                        <div className="bg-background-card p-6 md:p-8 rounded-3xl">
                            <div className="flex items-start justify-between mb-4">
                                <h1 className="text-3xl md:text-4xl font-bold">
                                    {item.title}
                                </h1>
                                <div className="flex items-center gap-1 bg-yellow-500/10 px-3 py-1 rounded-full">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-medium text-yellow-500">
                                        4.9
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-3 mb-4">
                                <p className="text-3xl md:text-4xl text-green-500 font-bold">
                                    {item.price}
                                </p>
                                <span className="text-gray-500 line-through text-lg">
                                    $49.99
                                </span>
                                <span className="bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full text-xs font-medium">
                                    Save 40%
                                </span>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                {item.longDescription}
                            </p>
                        </div>

                        <div className="bg-background-card p-6 md:p-8 rounded-3xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <CheckIcon className="w-6 h-6 text-green-500" />
                                What's Included
                            </h2>
                            <ul className="space-y-3">
                                {item.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/20 transition-colors">
                                            <CheckIcon
                                                size={14}
                                                className="text-green-500"
                                            />
                                        </div>
                                        <span className="text-gray-300 ml-3 leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {purchaseComplete ? (
                            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-8 text-center animate-in fade-in slide-in-from-bottom-4">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                    <CheckIcon
                                        size={32}
                                        className="text-green-500"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">
                                    Purchase Successful! 🎉
                                </h3>
                                <p className="text-gray-300 mb-6 text-lg">
                                    You will receive an email with download
                                    instructions and your license key shortly.
                                </p>
                                <Link to="/store">
                                    <Button className="bg-white text-black hover:bg-background-primary hover:text-white rounded-2xl py-3 px-6 transition-all duration-300 hover:scale-105">
                                        <ShoppingCartIcon
                                            size={18}
                                            className="mr-2"
                                        />
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="bg-background-card rounded-3xl p-6 md:p-8">
                                <h2 className="text-2xl font-bold mb-6">
                                    Complete Your Purchase
                                </h2>

                                <Button className="w-full py-4 mb-6 bg-white text-black hover:bg-gray-200 rounded-2xl flex items-center justify-center gap-2 text-lg font-semibold transition-all duration-300 hover:scale-105">
                                    <ShoppingCartIcon size={20} />
                                    <span>Buy Now - {item.price}</span>
                                </Button>

                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-background-button"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-background-card px-4 text-sm text-gray-400">
                                            Or pay with card
                                        </span>
                                    </div>
                                </div>

                                <Elements stripe={stripePromise}>
                                    <CheckoutForm
                                        item={item}
                                        onSuccess={() =>
                                            setPurchaseComplete(true)
                                        }
                                    />
                                </Elements>

                                <div className="mt-6 pt-6 border-t border-background-button/50">
                                    <p className="text-xs text-gray-500 text-center">
                                        🔒 Secure payment powered by Stripe.
                                        Your payment information is encrypted
                                        and secure.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer section */}
                <div className="mt-16 md:mt-24 pt-6 border-t-2 border-background-card">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <div className="mb-4 md:mb-0">
                            Sharan Shrivatsav · ©2024
                        </div>
                        <div>Edited Times - 114</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
