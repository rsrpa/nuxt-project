<template>
  <article class="office-article">
    <BaseHeading
      v-if="name"
      tag="h3"
      class="typography-heading-3 office-article__title"
    >
      {{ name }}
    </BaseHeading>
    <p v-if="address" class="typography-heading-5 office-article__address">
      {{ address }}
    </p>
    <BaseLink
      v-if="link.url && link.text"
      class="micro-body-medium office-article__directions-link"
      external
      :path="link.url"
    >
      {{ link.text }}
    </BaseLink>
    <BaseList
      v-if="detailsList.length"
      :list="detailsList"
      class="office-article__list"
    >
      <template #default="{ item }" class="office-article__list-item">
        <component
          :is="componentMap[item.type]"
          v-bind="{ ...item, timezone: $props.timezone }"
        />
      </template>
    </BaseList>
  </article>
</template>
<script>
import OfficePhone from '~/components/atoms/office-article-atoms/OfficePhone';
import OfficeEmail from '~/components/atoms/office-article-atoms/OfficeEmail';
import OfficeOpeningTimes from '~/components/atoms/office-article-atoms/OfficeOpeningTimes';

export default {
  name: 'OfficeArticle',
  props: {
    name: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    link: {
      type: Object,
      default: () => ({
        text: '',
        url: '',
      }),
      validator: (link) => 'text' in link && 'url' in link,
    },
    detailsList: {
      type: Array,
      default: () => [],
      validator: (list) =>
        list.every((item) => typeof item === 'string') ||
        list.every((item) => 'text' in item && 'type' in item),
    },
    timezone: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    componentMap: {
      telephone: OfficePhone,
      email: OfficeEmail,
      time: OfficeOpeningTimes,
    },
  }),
};
</script>
<style lang="scss" scoped>
.office-article {
  margin-bottom: ($spacing-default * 10);

  &__title,
  &__address {
    margin-bottom: ($spacing-default * 2);
  }

  &__address {
    font-weight: $font-weight-regular;
  }

  &__directions-link {
    color: $green-700;
  }

  &__list.list {
    padding-left: 0;
    margin-top: ($spacing-default * 2);
  }
}
</style>
