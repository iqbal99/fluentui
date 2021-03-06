import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { DetailsListShimmerPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/DetailsList/DetailsList.doc';

const related = require('!raw-loader!@fluentui/public-docsite/src/pages/Controls/DetailsListPage/docs/DetailsListRelated.md') as string;

export const DetailsListShimmerPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    title: 'DetailsList - Shimmer',
    isFeedbackVisible: false,
    related,
  },
};
