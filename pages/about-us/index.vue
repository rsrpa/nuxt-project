<template>
  <OfficeModule v-bind="mockContent" />
</template>
<script>
export default {
  name: 'AboutUs',
  data: () => ({
    mockContent: {
      title: 'Our offices',
      offices: [
        {
          name: 'London',
          address: '160 Kensington High St., London W8 7RG',
          link: {
            text: 'Directions on Google Maps',
            url:
              'https://www.google.com/maps/place/Mind+Gym/@51.4996852,-0.1957278,16z/data=!4m5!3m4!1s0x0:0x5f0007f92f186d36!8m2!3d51.5002899!4d-0.1955956',
          },
          detailsList: [
            { text: 'Mon-Fri: 09:00-18:00 (EST)', type: 'time', icon: 'clock' },
            {
              text: 'uk@themindgym.com',
              type: 'email',
              icon: 'mail-send-envelope',
            },
            { text: '+44 20 7376 0626', type: 'telephone', icon: 'phone' },
          ],
          timezone: 'Europe/London',
        },
        {
          name: 'New York',
          address:
            '475 Park Ave South, Floor 2, New York, NY 10016 United States',
          link: {
            text: 'Directions on Google Maps',
            url:
              'https://www.google.com/maps/place/475+Park+Ave+S+Floor+2,+New+York,+NY+10016,+USA/@40.7442789,-73.9835638,17.18z/data=!4m5!3m4!1s0x89c25907e549e255:0xe5a4bafb8df6dfa1!8m2!3d40.7454124!4d-73.982242',
          },
          detailsList: [
            { text: 'Mon-Fri: 09:00-18:00 (EST)', type: 'time', icon: 'clock' },
            {
              text: 'usa@themindgym.com',
              type: 'email',
              icon: 'mail-send-envelope',
            },
            { text: '+1 646 649 4333', type: 'telephone', icon: 'phone' },
          ],
          timezone: 'America/New_York',
        },
        {
          name: 'Singapore',
          detailsList: [
            {
              text: 'usa@themindgym.com',
              type: 'email',
              icon: 'mail-send-envelope',
            },
            { text: '+65 6962 8980', type: 'telephone', icon: 'phone' },
          ],
          timezone: 'America/New_York',
        },
      ],
    },
  }),
};
</script>
<style lang="scss" scoped>
.offices-container {
  @include breakpoint-min(sm) {
    display: flex;
    flex-wrap: wrap;
  }
}
.office {
  @include breakpoint-min(sm) {
    max-width: 50%;
    padding-right: ($spacing-default * 7);
  }

  @include breakpoint-min(md) {
    max-width: 33%;
    padding-right: ($spacing-default * 9);
  }
}
</style>
