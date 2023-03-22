import { by, device, element, expect } from 'detox';

describe('TodoAppMobile', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display welcome message', async () => {
    await expect(element(by.id('heading'))).toHaveText(
      'Welcome TodoAppMobile 👋'
    );
  });
});
