import { render, screen, within } from '@testing-library/react';
import { DEFAULT_LIMIT } from '@/common/constants';
import { TestRoot } from '@/mock/TestRoot';
import { CardSkeleton } from '@/components/organisms/CharacterList/CardSkeleton';
const renderView = () => {
  return render(
    <TestRoot>
      <CardSkeleton />
    </TestRoot>
  );
};
describe('CardSkeleton', () => {
  it('renders the correct number of skeleton cards based on DEFAULT_LIMIT', async () => {
    renderView();

    // Find all the skeleton cards
    const skeletonList = await screen.findByTestId('skeleton-character-list');

    // Verify that the number of skeleton cards matches DEFAULT_LIMIT
    expect(
      within(skeletonList).getAllByTestId('skeleton-character-card').length
    ).toBe(DEFAULT_LIMIT);
  });
});
