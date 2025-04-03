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
    const storeItemsDetailed = [
      {
        id: "ui-components",
        title: "UI Component Library",
        price: "$49",
        numericPrice: 49,
        imageUrl: "/Store/ui-components.jpg",
        description:
          "A collection of premium UI components for modern web applications",
        features: [
          "50+ customizable components",
          "Dark and light mode support",
          "Responsive design",
          "Accessibility compliant",
          "TypeScript support",
          "Regular updates",
        ],
        longDescription:
          "This comprehensive UI component library provides everything you need to build modern, responsive web applications. Each component is carefully crafted with attention to detail, accessibility, and performance. The library includes form elements, navigation components, data display widgets, and more. Perfect for React, Vue, or Angular projects.",
      },
      {
        id: "portfolio-template",
        title: "Portfolio Template",
        price: "$29",
        numericPrice: 29,
        imageUrl: "/Store/portfolio-template.jpg",
        description:
          "Professional portfolio template for developers and designers",
        features: [
          "Responsive design",
          "Project showcase section",
          "About me page",
          "Contact form",
          "Blog integration",
          "Dark and light mode",
        ],
        longDescription:
          "Stand out from the crowd with this professionally designed portfolio template. Showcase your projects, skills, and experience in a clean, modern layout. The template is fully responsive and customizable, allowing you to create a unique online presence that reflects your personal brand. Includes sections for projects, about me, contact, and an optional blog.",
      },
      {
        id: "design-system",
        title: "Design System",
        price: "$79",
        numericPrice: 79,
        imageUrl: "/Store/design-system.jpg",
        description:
          "Complete design system with Figma files and code implementation",
        features: [
          "Figma design files",
          "React component library",
          "CSS/SCSS variables",
          "Typography system",
          "Color palette",
          "Icon set",
          "Documentation",
        ],
        longDescription:
          "This comprehensive design system bridges the gap between design and development. It includes Figma design files with organized components, styles, and templates, along with a matching React component library. The system ensures consistency across your projects and speeds up both design and development workflows. Perfect for teams looking to establish a cohesive visual language.",
      },
      {
        id: "react-hooks",
        title: "React Hooks Collection",
        price: "$19",
        numericPrice: 19,
        imageUrl: "/Store/react-hooks.jpg",
        description:
          "Custom React hooks for common UI patterns and functionality",
        features: [
          "20+ custom hooks",
          "TypeScript support",
          "Comprehensive documentation",
          "Usage examples",
          "Performance optimized",
          "Regular updates",
        ],
        longDescription:
          "Save time and write cleaner code with this collection of custom React hooks. The package includes hooks for form handling, data fetching, animations, media queries, local storage, and more. Each hook is thoroughly tested, well-documented, and comes with usage examples. Perfect for React developers looking to avoid reinventing the wheel and focus on building features.",
      },
      {
        id: "animation-library",
        title: "Animation Library",
        price: "$39",
        numericPrice: 39,
        imageUrl: "/Store/animation-library.jpg",
        description:
          "Performant animation utilities for creating engaging user experiences",
        features: [
          "60+ pre-built animations",
          "Minimal bundle size",
          "Hardware-accelerated",
          "Customizable timing and easing",
          "React and Vue integrations",
          "Detailed documentation",
        ],
        longDescription:
          "Add life to your interfaces with this lightweight animation library. Built with performance in mind, it leverages hardware acceleration to deliver smooth animations even on mobile devices. The library includes entrance/exit animations, hover effects, scroll-triggered animations, and more. Easy to implement with minimal code and fully customizable to match your brand's personality.",
      },
      {
        id: "icon-pack",
        title: "Premium Icon Pack",
        price: "$24",
        numericPrice: 24,
        imageUrl: "/Store/icon-pack.jpg",
        description:
          "Extensive collection of high-quality vector icons for modern interfaces",
        features: [
          "500+ unique icons",
          "Multiple formats (SVG, PNG, Figma)",
          "Customizable colors and sizes",
          "Regular updates with new icons",
          "Commercial license included",
          "Organized categories",
        ],
        longDescription:
          "Enhance your designs with this premium collection of hand-crafted vector icons. Each icon is designed on a consistent grid system for perfect alignment and proportion. The pack includes essential UI icons, social media logos, e-commerce symbols, and much more. Available in multiple formats including SVG, PNG, and as a Figma library for easy integration into your workflow.",
      },
      {
        id: "theme-collection",
        title: "Theme Collection",
        price: "$35",
        numericPrice: 35,
        imageUrl: "/Store/theme-collection.jpg",
        description:
          "Curated collection of premium themes for various frameworks",
        features: [
          "10 unique themes",
          "Compatible with React, Vue, and Angular",
          "Responsive layouts",
          "Dark and light variants",
          "Customizable color schemes",
          "Regular updates",
        ],
        longDescription:
          "Transform your application's look and feel with this collection of professionally designed themes. Each theme includes a complete set of components, layouts, and color schemes that work together to create a cohesive visual experience. Whether you're building a dashboard, e-commerce site, or content platform, these themes provide a solid foundation that can be customized to match your brand.",
      },
      {
        id: "tailwind-templates",
        title: "Tailwind CSS Templates",
        price: "$45",
        numericPrice: 45,
        imageUrl: "/Store/tailwind-templates.jpg",
        description:
          "Collection of ready-to-use Tailwind CSS templates for modern web projects",
        features: [
          "15+ page templates",
          "Fully responsive",
          "Dark mode support",
          "Optimized for performance",
          "Well-documented",
          "Regular updates",
        ],
        longDescription:
          "Jumpstart your web development with this collection of professionally designed Tailwind CSS templates. Each template is built with best practices in mind and optimized for performance. The collection includes landing pages, dashboards, pricing pages, authentication screens, and more. Perfect for developers who want to save time without sacrificing quality or customization options.",
      },
    ];

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
