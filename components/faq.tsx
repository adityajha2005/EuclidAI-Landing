'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function FAQSection() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is Euclid AI?',
            answer: 'Euclid AI is an advanced artificial intelligence platform designed to provide accurate, real-time insights and analysis across various domains. Our system combines cutting-edge AI models with robust infrastructure to deliver reliable and actionable intelligence.',
        },
        {
            id: 'item-2',
            question: 'How does the beta program work?',
            answer: "Beta participants get early access to Euclid AI's features and capabilities. You'll receive a dedicated onboarding session, priority support, and the opportunity to shape the platform's development through direct feedback channels.",
        },
        {
            id: 'item-3',
            question: 'What kind of support is available?',
            answer: 'We provide comprehensive support including technical documentation, dedicated customer success managers, and priority email support. Beta users also get access to exclusive office hours and direct communication channels with our team.',
        },
        {
            id: 'item-4',
            question: 'How secure is Euclid AI?',
            answer: 'Security is our top priority. We employ enterprise-grade encryption, regular security audits, and comply with industry standards. All data is processed in accordance with strict privacy policies and data protection regulations.',
        },
        {
            id: 'item-5',
            question: 'What makes Euclid AI different?',
            answer: 'Euclid AI stands out through its advanced analytical capabilities, real-time processing, and ability to handle complex queries with high accuracy. Our platform is built for scale and reliability, making it ideal for both individual users and enterprise applications.',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            },
        },
    }

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/80 to-white dark:via-gray-900/80 dark:to-gray-900 pointer-events-none" />
            
            <div className="relative mx-auto max-w-6xl px-4 md:px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="mx-auto max-w-2xl text-center mb-12 md:mb-16"
                >
                    <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg text-balance leading-relaxed">
                        Everything you need to know about Euclid AI and how it can transform your workflow.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mx-auto max-w-2xl"
                >
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-5"
                    >
                        {faqItems.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="overflow-hidden group"
                            >
                                <AccordionItem
                                    value={item.id}
                                    className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:shadow-lg data-[state=open]:bg-white dark:data-[state=open]:bg-gray-800"
                                >
                                    <AccordionTrigger 
                                        className="py-6 px-6 text-lg font-medium hover:no-underline group/trigger"
                                    >
                                        <span className="text-left group-data-[state=open]/trigger:text-primary transition-colors duration-200">
                                            {item.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6">
                                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-center mt-12 md:mt-16"
                    >
                        <p className="text-muted-foreground text-base">
                            Still have questions?{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline inline-flex items-center gap-1 group"
                            >
                                Contact our support team
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}