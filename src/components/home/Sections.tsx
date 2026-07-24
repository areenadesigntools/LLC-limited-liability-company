'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, SectionHeading, Container, Section, Grid, Card, CardContent, Badge } from '@/components/ui';
import { services, taxServices, paymentProviders, faqItems, contactInfo, companyInfo } from '@/data';
import { getWhatsAppUrl } from '@/lib/utils';
import { CheckCircle, Users, Zap, Lock, Globe, Clock, FileText, CreditCard } from 'lucide-react';

// Hero Section
export function HeroSection() {
  const trustFeatures = [
    { icon: Lock, label: 'Secure Payments' },
    { icon: Globe, label: 'Worldwide Support' },
    { icon: Zap, label: 'Fast Processing' },
    { icon: CheckCircle, label: '100% Confidential' },
  ];

  return (
    <Section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6">
              <Badge variant="primary" size="md" className="text-white bg-blue-600/50">
                Free LLC Registration
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Start Your U.S. Business with Free LLC Registration
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Helping entrepreneurs worldwide establish and manage U.S. companies through reliable business formation, tax, and compliance services.
            </p>
            <div className="bg-blue-600/30 border border-blue-500/50 rounded-lg p-4 mb-8">
              <p className="text-white text-sm">
                <strong>Our LLC registration assistance is free.</strong> You only pay the applicable state government fee.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/free-llc-registration">
                <Button size="lg" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </Link>
              <a href={getWhatsAppUrl('Hello, I would like to start my U.S. LLC business.')} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-dark">
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.label} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary-blue flex-shrink-0" />
                    <span className="text-sm text-blue-100">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative h-96 bg-gradient-to-br from-blue-600/20 to-blue-900/50 rounded-2xl border border-blue-500/50 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <FileText className="w-24 h-24 text-primary-blue/50 mx-auto mb-4" />
                    <CreditCard className="w-24 h-24 text-primary-blue/50 mx-auto absolute right-8 top-20" />
                  </div>
                  <p className="text-blue-300 text-sm font-semibold">Premium Business Formation</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(37, 99, 235, 0.5)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

// Featured Services Section
export function FeaturedServicesSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          title="Everything You Need to Launch and Grow in the U.S."
          subtitle="Comprehensive services for business formation and growth"
          centered
          badge="FEATURED SERVICES"
        />

        <Grid cols={3} gap="md">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-primary-blue h-full transition-all duration-300">
                <CardContent className="p-6">
                  {service.isPopular && (
                    <div className="mb-3">
                      <Badge variant="success" size="sm">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                    <Zap className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.shortDescription}</p>
                  <Link href={service.href}>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

// Why Choose Us Section
export function WhyChooseUsSection() {
  const features = [
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Professional team with extensive business formation expertise',
    },
    {
      icon: FileText,
      title: 'Transparent Process',
      description: 'Clear breakdown of our services and government fees',
    },
    {
      icon: Globe,
      title: 'Global Client Support',
      description: 'Serving entrepreneurs worldwide in multiple time zones',
    },
    {
      icon: Lock,
      title: 'Secure Handling',
      description: 'Your information is kept confidential and secure',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Efficient processing and quick response times',
    },
    {
      icon: Clock,
      title: 'Dedicated Assistance',
      description: 'Personal support throughout your business journey',
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <SectionHeading
          title="Why Choose LLC Limited Liability Company?"
          subtitle={companyInfo.description}
          centered
        />

        <Grid cols={3} gap="lg">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col">
                  <div className="mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}

// Free LLC Promotional Section
export function FreeLLCPromotionalSection() {
  return (
    <Section className="bg-gradient-to-r from-primary-blue via-blue-600 to-primary-blue text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Free LLC Registration - No Hidden Charges</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
              <p className="text-white font-semibold mb-2">✓ LLC Registration Assistance</p>
              <p className="text-blue-100 text-sm">Completely FREE</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
              <p className="text-white font-semibold mb-2">→ State Government Fee</p>
              <p className="text-blue-100 text-sm">Varies by state ($50-$500)</p>
            </div>
          </div>

          <ul className="text-left max-w-2xl mx-auto mb-8 space-y-3 text-blue-100">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>No hidden service charges for basic LLC registration assistance</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Optional services may have separate charges</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>State fees vary by location - we provide transparent breakdown</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-llc-registration">
              <Button size="lg" variant="secondary" className="text-primary-blue">
                Start Free LLC Registration
              </Button>
            </Link>
            <a href={getWhatsAppUrl('I would like to start my free LLC registration')} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Talk on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

// Tax Services Preview Section
export function TaxServicesPreviewSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          title="Complete Tax and Compliance Solutions"
          subtitle="Expert tax filing and compliance services"
          centered
          badge="TAX SERVICES"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {taxServices.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-all h-full">
                <h3 className="text-lg font-bold text-primary-dark mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <p className="text-xs text-gray-500 mb-4">
                  <strong>Typical Users:</strong> {service.typicalUsers}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/tax-services">
            <Button size="lg">Explore Tax Services</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// How It Works Section
export function HowItWorksSection() {
  const steps = [
    { number: '1', title: 'Choose Your Service', description: 'Select the service that fits your business needs' },
    { number: '2', title: 'Submit Your Application', description: 'Provide required information and documents' },
    { number: '3', title: 'Get Expert Assistance', description: 'We guide you through the entire process' },
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle="Simple, transparent, and straightforward process"
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:absolute top-12 right-0 w-1/3 h-1 bg-gradient-to-r from-primary-blue to-transparent transform translate-x-1/2"></div>
              )}
              <Card className="p-8 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Payment Accounts Section
export function PaymentAccountsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          title="Payment Account Services"
          subtitle="Get expert guidance for popular payment platforms"
          centered
          badge="PAYMENT SOLUTIONS"
        />

        <Grid cols={4} gap="md" className="mb-8">
          {paymentProviders.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col hover:border-primary-blue transition-all">
                <div className="mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                  <CreditCard className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{provider.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{provider.description}</p>
                <Link href={provider.href}>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </Grid>

        <div className="bg-blue-50 border-l-4 border-primary-blue p-6 rounded">
          <p className="text-sm text-gray-700">
            <strong>Disclaimer:</strong> Account approval, availability, limits, verification, and service eligibility are determined solely by the respective payment provider. We assist with documentation and setup, but cannot guarantee approval.
          </p>
        </div>
      </Container>
    </Section>
  );
}

// FAQ Preview Section
export function FAQPreviewSection() {
  const previewFAQs = faqItems.slice(0, 6);

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions"
          centered
          badge="FAQ"
        />

        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          {previewFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-md transition-all">
                <h3 className="font-bold text-primary-dark mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/faq">
            <Button size="lg">View All FAQs</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// Final Consultation CTA Section
export function ConsultationCTASection() {
  return (
    <Section className="bg-gradient-to-br from-primary-dark to-blue-900 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your U.S. Business?</h2>
          <p className="text-blue-100 text-lg mb-8">Contact us today for a free consultation and let us help you navigate the process.</p>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-blue-200 text-sm mb-1">📍 Address</p>
                <p className="font-semibold">{contactInfo.address}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm mb-1">📞 Phone</p>
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm mb-1">📧 Email</p>
                <p className="font-semibold">{contactInfo.email}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm mb-1">⏰ Hours</p>
                <p className="font-semibold">10:00 am - 07:00 pm (UTC+5)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getWhatsAppUrl('Hello, I would like a free consultation')} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-primary-blue">
                Chat on WhatsApp
              </Button>
            </a>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
