<template>
  <div>
    <HeroHome v-bind="mockData.heroBanner" />
    <ClientLogos v-bind="mockData.clientLogos" />
    <ValueProp v-bind="mockData.valueProp" />
    <Container>
      <SolutionsListHighlight v-bind="mockData.solutionsListHighlight" />
    </Container>
    <Container>
      <BlendedLearning v-bind="mockData.blendedLearning" />
    </Container>
    <QuoteBanner v-bind="mockData.quoteBanner" />
    <Container>
      <AwardsBanner v-bind="mockData.awardsBanner" />
    </Container>
  </div>
</template>

<script>
// Components
import HeroHome from '@/components/organisms/hero-home/HeroHome.vue';
import ValueProp from '@/components/organisms/value-prop/ValueProp.vue';
import ClientLogos from '@/components/organisms/client-logos/ClientLogos.vue';
import BlendedLearning from '@/components/organisms/bleanded-learning/BlendedLearning.vue';
import SolutionsListHighlight from '@/components/organisms/solutions-list-highlight/SolutionsListHighlight.vue';
import QuoteBanner from '@/components/organisms/quote-banner/QuoteBanner.vue';
import AwardsBanner from '@/components/organisms/awards-banner/AwardsBanner.vue';
// Data Query
// import homeQuery from '~/apollo/queries/home/home.gql';

export default {
  name: 'Homepage',
  components: {
    HeroHome,
    ClientLogos,
    ValueProp,
    BlendedLearning,
    SolutionsListHighlight,
    QuoteBanner,
    AwardsBanner,
  },
  // TODO: Uncomment this to fetch data from Strapi CMS
  // apollo: {
  //   home: {
  //     prefetch: true,
  //     query: homeQuery,
  //   },
  // },
  data() {
    return {
      home: {},
      query: '',
      mockData: {
        seo: {
          title: 'Psychology Based Organisational Transformation | Mind Gym UK',
          description:
            'Learn how Mind Gym can help you sharpen your leadership skills, improve personal and business relationships, and reach next-level performance.',
        },
        heroBanner: {
          title: 'Change at the speed of life.',
          subtitle: 'We equip ambitious companies to be ready for tomorrow.',
          image: {
            url: '/images/mock/homepage-hero.png',
          },
          button: {
            path: '/get-in-touch/',
            label: 'Get in touch',
          },
        },
        clientLogos: {
          title: 'We have helped over half the FTSE 100 and the S&P 100',
          variant: 'dark',
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
        valueProp: {
          title: 'Transforming how people think, feel and behave at work.',
          image: {
            src: '/images/mock/value-prop.svg',
            alt: 'Transforming how people think to transform how they act.',
          },
          blocks: [
            {
              title: 'The appliance of science.',
              subtitle:
                'Practical solutions, steeped in psychology and proven to work at scale to deliver peak performance.',
            },
            {
              title: 'Millions of minds transformed.',
              subtitle:
                'Over 3 million people worldwide have changed how they think, feel and behave after coming to MindGym.',
            },
          ],
        },
        solutionsListHighlight: {
          eyebrow: 'Solutions',
          title: 'Address tomorrow’s challenges, today.',
          cards: [
            {
              title: 'Diversity, equity & inclusion.',
              subtitle: 'Get it together.',
              icon: '/images/mock/illustration-white-diversity-inclusion.svg',
              link: 'https://themindgym.com/solutions/diversity-inclusion/',
            },
            {
              title: 'Performance management.',
              subtitle: 'Achieve more with less, forever.',
              icon:
                '/images/mock/illustration-white-performance-management.svg',
              link: 'https://themindgym.com/solutions/performance-management/',
            },
            {
              title: 'Manager development.',
              subtitle: 'Teach your leaders to dance.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/management-development/',
            },
          ],
          button: {
            path: '/solutions/',
            label: 'All solutions',
          },
        },
        blendedLearning: {
          eyebrow: 'Blended learning',
          title:
            'Delivered with tools that slip seamlessly into hands and minds',
          image: {
            src: '/images/mock/blended-learning.svg',
            alt: 'Blended Learning',
          },
          liveMode: {
            title: 'Live',
            subtitle: 'Coach-led, in-person and virtual.',
          },
          digitalMode: {
            title: 'On-demand',
            subtitle: 'Self-serve, digital and always-on.',
          },
        },
        quoteBanner: {
          title: 'Our clients speak for themselves',
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
        awardsBanner: {
          title: 'Recognised as a leader in our industry',
          awards: [
            {
              name: '1000 Companies to Inspire Britain',
              image: '/images/mock/1000-companies-britain-2018.png',
            },
            {
              name: 'Training Industry - Top 20 Company - Leadership Training',
              image: '/images/mock/top20-leadership-training-2019.png',
            },
            {
              name:
                'Brandon Hall Group - Best Unique or Innovative Learning and Development Program - Bronze - 2017',
              image: '/images/mock/bronze-learning-award-2017.png',
            },
            {
              name:
                'The Learning Awards - Learning Provider of the Year 2019 Finalist',
              image: '/images/mock/the-learning-awards-2019.png',
            },
          ],
        },
      },
    };
  },
  head() {
    // TODO: switch the seoData source to fetch the data from Strapi CMS
    // const seoData = this.home.seo;
    const seoData = this.mockData.seo;
    return {
      title: seoData && seoData.title ? seoData.title : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: seoData && seoData.description ? seoData.description : '',
        },
      ],
    };
  },
};
</script>
