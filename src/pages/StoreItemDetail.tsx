import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ShoppingCartIcon, CheckIcon } from "lucide-react";
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
  "pk_test_51O8oBbSJQHZQOVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
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
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/store">
            <Button className="bg-white text-black hover:bg-background-primary hover:text-white">
              Return to Store
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/store"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeftIcon size={16} className="mr-2" />
          Back to Store
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-background-card to-background-primary/30 rounded-2xl overflow-hidden h-[500px] flex items-center justify-center p-8 border border-white/5">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-fill shadow-xl rounded-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
              <p className="text-xl text-green-500 font-semibold mb-4">
                {item.price}
              </p>
              <p className="text-gray-300">{item.longDescription}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="space-y-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon
                      size={18}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {purchaseComplete ? (
              <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <CheckIcon size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Thank you for your purchase!
                </h3>
                <p className="text-gray-300 mb-4">
                  You will receive an email with download instructions shortly.
                </p>
                <Link to="/store">
                  <Button className="bg-white text-black hover:bg-background-primary hover:text-white rounded-2xl">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="bg-background-card rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4">Purchase Options</h2>

                <Button className="w-full py-3 mb-4 bg-white text-black hover:bg-gray-200 rounded-2xl flex items-center justify-center gap-2">
                  <ShoppingCartIcon size={18} />
                  <span>Buy Now - {item.price}</span>
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-background-card px-2 text-sm text-gray-400">
                      Or pay with
                    </span>
                  </div>
                </div>

                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    item={item}
                    onSuccess={() => setPurchaseComplete(true)}
                  />
                </Elements>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
