<template>
  <div>
    <HeroBanner :hero-banner="mockData.heroBanner" />
    <SolutionsList v-bind="mockData.solutions" />
    <CtaBanner :cta-banner="mockData.ctaBanner" />
  </div>
</template>

<script>
import HeroBanner from '@/components/organisms/hero-banner/HeroBanner.vue';
import SolutionsList from '@/components/organisms/solutions-list/SolutionsList.vue';
import CtaBanner from '@/components/organisms/cta-banner/CtaBanner.vue';

export default {
  name: 'GetInTouch',
  components: {
    HeroBanner,
    SolutionsList,
    CtaBanner,
  },
  data() {
    return {
      mockData: {
        heroBanner: {
          heading: 'Solutions',
          subheading: 'Transform performance by changing behaviour.',
        },
        solutions: {
          cards: [
            {
              title: 'Performance management.',
              subtitle: 'Achieve more with less, forever.',
              icon:
                '/images/mock/illustration-white-performance-management.svg',
              link: 'https://themindgym.com/solutions/performance-management/',
            },
            {
              title: 'Diversity, equity & inclusion.',
              subtitle: 'Get it together.',
              icon: '/images/mock/illustration-white-diversity-inclusion.svg',
              link: 'https://themindgym.com/solutions/diversity-inclusion/',
            },
            {
              title: 'Manager development.',
              subtitle: 'Teach your leaders to dance.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/management-development/',
            },
            {
              title: 'Onboarding.',
              subtitle: 'Get off to a flying start.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/onboarding/',
            },
            {
              title: 'Personal Effectiveness.',
              subtitle: 'Be better.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/personal-effectiveness/',
            },
            {
              title: 'Reorganisation.',
              subtitle: 'Upgrade when you downsize.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/reorganisation/',
            },
            {
              title: 'Respect.',
              subtitle: 'Banish bullying and harrassment.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/respect/',
            },
            {
              title: 'Customer experience.',
              subtitle: 'Delight more people.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/customer-service/',
            },
            {
              title: 'Change.',
              subtitle: 'Turn disruption to your advantage.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/change/',
            },
            {
              title: 'Ethics.',
              subtitle: 'Help good people make good choices.',
              icon:
                '/images/mock/illustration-white-management-development.svg',
              link: 'https://themindgym.com/solutions/ethics/',
            },
          ],
        },
        ctaBanner: {
          heading: {
            tag: 'h4',
            text: 'Talk to a scientist',
          },
          paragraph:
            'Discover how behavioural science can transform your company.',
          primaryButton: {
            path: '/get-in-touch/',
            label: 'Get in touch',
          },
        },
      },
    };
  },
};
</script>
