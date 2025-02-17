import { FormattedMessage } from 'react-intl';

import { memo } from 'react';

import { Link, type LinkProps } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import { MoreDetailsIcon } from '@/components/Table/DetailsColumn';

const MoreDetailsLinkButton = ({
  linkProps,
}: {
  linkProps: LinkProps;
}): JSX.Element => {
  return (
    <Button
      asChild
      variant="outline"
      className="w-min rounded-full border-2 border-black text-sm text-dimGray hover:bg-mediumGray"
    >
      <Link {...linkProps}>
        <div className="flex gap-2">
          <FormattedMessage id="global.showMoreDetails" />
          <MoreDetailsIcon />
        </div>
      </Link>
    </Button>
  );
};
export const MemoizedMoreDetailsButton = memo(MoreDetailsLinkButton);

const MoreDetailsIconLink = ({
  linkProps,
}: {
  linkProps: LinkProps;
}): JSX.Element => {
  return (
    <Link {...linkProps}>
      <MoreDetailsIcon />
    </Link>
  );
};
export const MemoizedMoreDetailsIconLink = memo(MoreDetailsIconLink);
