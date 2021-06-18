import BlendedLearning from './BlendedLearning.vue';

describe('BlendedLearning', () => {
  test('image validator', () => {
    const validator = BlendedLearning.props.image.validator;
    try {
      validator('image');
    } catch (error) {
      expect(error.toString()).toContain(
        "Cannot use 'in' operator to search for 'src' in image"
      );
    }
    expect(validator({})).toBe(false);
    expect(validator({ src: '', alt: '' })).toBe(true);
  });
});

describe('BlendedLearning', () => {
  test('liveMode validator', () => {
    const validator = BlendedLearning.props.liveMode.validator;
    try {
      validator('liveMode');
    } catch (error) {
      expect(error.toString()).toContain(
        "Cannot use 'in' operator to search for 'title' in liveMode"
      );
    }
    expect(validator({})).toBe(false);
    expect(validator({ title: '', subtitle: '' })).toBe(true);
  });
});

describe('BlendedLearning', () => {
  test('digitalMode validator', () => {
    const validator = BlendedLearning.props.digitalMode.validator;
    try {
      validator('digitalMode');
    } catch (error) {
      expect(error.toString()).toContain(
        "Cannot use 'in' operator to search for 'title' in digitalMode"
      );
    }
    expect(validator({})).toBe(false);
    expect(validator({ title: '', subtitle: '' })).toBe(true);
  });
});
