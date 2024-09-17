import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button } from "@/components/ui/button";

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-100 min-h-screen">
                {/* Header */}
                <header className="bg-white shadow-md">
                    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="text-xl font-bold text-blue-600">
                            Hospital Management System
                        </div>
                        <div>
                            {auth.user ? (
                                <Button variant="link" asChild>
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </Button>
                            ) : (
                                <Button
                                    variant="link"
                                    asChild
                                    className="mr-4"
                                >
                                    <Link href={route("login")}>
                                        Log in
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Main Content */}
                <main>
                    {/* Hero Section */}
                    <section className="bg-blue-500 text-white py-20">
                        <div className="container mx-auto px-6 text-center">
                            <h1 className="text-4xl font-bold mb-4">
                                Welcome to Our Hospital
                            </h1>
                            <p className="text-xl mb-8">
                                Providing quality healthcare for you and your
                                family
                            </p>
                            <Button variant="secondary">Learn More</Button>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="py-16">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-8">
                                Our Services
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    "Emergency Care",
                                    "Laboratory Services",
                                    "Specialized Treatments",
                                ].map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md"
                                    >
                                        <h3 className="text-xl font-semibold mb-4">
                                            {service}
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="bg-gray-200 py-16">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-8">
                                Patient Testimonials
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        name: "John Doe",
                                        text: "Excellent care and friendly staff. Highly recommended!",
                                    },
                                    {
                                        name: "Jane Smith",
                                        text: "The doctors are very professional and attentive. Great experience.",
                                    },
                                ].map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md"
                                    >
                                        <p className="mb-4">
                                            "{testimonial.text}"
                                        </p>
                                        <p className="font-semibold">
                                            - {testimonial.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Subscribe Section */}
                    <section className="py-16">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Stay Updated
                            </h2>
                            <p className="mb-8">
                                Subscribe to our newsletter for the latest
                                health tips and hospital news.
                            </p>
                            <form className="max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 mb-4 border rounded-md"
                                />
                                <Button type="submit">Subscribe</Button>
                            </form>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-8">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                <h3 className="text-xl font-bold mb-4">
                                    Hospital Management System
                                </h3>
                                <p>Providing quality healthcare since 1990</p>
                            </div>
                            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                <h3 className="text-xl font-bold mb-4">
                                    Quick Links
                                </h3>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-blue-300"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-blue-300"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-blue-300"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3">
                                <h3 className="text-xl font-bold mb-4">
                                    Contact Us
                                </h3>
                                <p>123 Hospital Street, City, Country</p>
                                <p>Email: info@hospital.com</p>
                                <p>Phone: (123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
