<template>
  <div>
    <NotificationMessage v-bind="mockData.NotificationMessage" />
    <HeroBanner :hero-banner="mockData.heroBanner" />
    <Container>
      <SolutionsListHighlight v-bind="mockData.solutionsListHighlight" />
    </Container>
  </div>
</template>

<script>
import HeroBanner from '@/components/organisms/hero-banner/HeroBanner.vue';
import SolutionsListHighlight from '@/components/organisms/solutions-list-highlight/SolutionsListHighlight.vue';
import NotificationMessage from '@/components/molecules/notification-message/NotificationMessage.vue';

export default {
  name: 'GetInTouch',
  components: {
    HeroBanner,
    SolutionsListHighlight,
    NotificationMessage,
  },
  data() {
    return {
      mockData: {
        heroBanner: {
          heading: 'Recommended for you',
          subheading: 'More resources to help you on your journey',
        },
        NotificationMessage: {
          title: 'Message received',
          message:
            'Thanks for getting in touch. You should expect to hear back from us within 24 hours.',
          type: 'success',
        },
        solutionsListHighlight: {
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
            path: '/what-we-do/solutions/',
            label: 'All solutions',
          },
        },
      },
    };
  },
};
</script>
