<template>
  <div>
    <HeroBanner :hero-banner="mockData.heroBanner" />
    <ContactForm />
    <ClientLogos v-bind="mockData.clientLogos" />
    <QuoteBanner v-bind="mockData.quoteBanner" />
  </div>
</template>

<script>
import HeroBanner from '@/components/organisms/hero-banner/HeroBanner.vue';
import ContactForm from '@/components/organisms/contact-form/ContactForm';
import ClientLogos from '@/components/organisms/client-logos/ClientLogos.vue';
import QuoteBanner from '@/components/organisms/quote-banner/QuoteBanner.vue';

export default {
  name: 'GetInTouch',
  components: {
    HeroBanner,
    ContactForm,
    ClientLogos,
    QuoteBanner,
  },
  data() {
    return {
      mockData: {
        heroBanner: {
          heading: 'Get in touch.',
          subheading: 'Let’s talk about tomorrow.',
          bullets: [
            'What will work best for you?',
            'How quickly and easily will you see results?',
            'Hear from one of our experts within a day.',
          ],
        },
        clientLogos: {
          title: 'We have helped over half the FTSE 100 and the S&P 100',
          variant: 'light',
          logos: [
            {
              company: 'Mastercard',
              path: '/images/mock/mastercard.svg',
            },
            {
              company: 'Pinterest',
              path: '/images/mock/pinterest.svg',
            },
            {
              company: 'McKinsey',
              path: '/images/mock/mckinsey.svg',
            },
            {
              company: 'Microsoft',
              path: '/images/mock/microsoft.svg',
            },
            {
              company: 'Nike',
              path: '/images/mock/nike.svg',
            },
            {
              company: 'Audi',
              path: '/images/mock/audi.svg',
            },
            {
              company: 'lululemon',
              path: '/images/mock/lululemon.svg',
            },
            {
              company: 'KOHLER',
              path: '/images/mock/kohler.svg',
            },
          ],
        },
        quoteBanner: {
          logo: {
            image: '/images/mock/net-a-porter.svg',
            alt: 'NET-A-PORTER logo',
          },
          backgroundImage: '/images/mock/quote.jpg',
          quotation:
            'When it comes to helping our people become even better than they already are, Mind Gym has been fantastic for NET-A-PORTER.',
          name: 'Natalie Massenet',
          position: 'Founder & Chairman',
        },
      },
    };
  },
};
</script>
