import { useEffect, useRef } from 'react';
import { XIcon } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { Button, cn } from '@librechat/client';
import { useGetBannerQuery } from '~/data-provider';
import store from '~/store';
import TestingVersion from './TestingVersion';

export const Banner = ({ onHeightChange }: { onHeightChange?: (height: number) => void }) => {
  const { data: banner } = useGetBannerQuery();
  const [hideBannerHint, setHideBannerHint] = useRecoilState<string[]>(store.hideBannerHint);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onHeightChange && bannerRef.current) {
      onHeightChange(bannerRef.current.offsetHeight);
    }
  }, [banner, hideBannerHint, onHeightChange]);

  if (
    !banner ||
    (banner.bannerId && !banner.persistable && hideBannerHint.includes(banner.bannerId))
  ) {
    return null;
  }

  const onClick = () => {
    if (banner.persistable) {
      return;
    }

    setHideBannerHint([...hideBannerHint, banner.bannerId]);

    if (onHeightChange) {
      onHeightChange(0);
    }
  };
  const formattedMessage = banner.message.replace(/\n/g, '<br />');
  return (
    <div
      ref={bannerRef}
      className="sticky top-0 z-20 flex w-full flex-col items-center justify-between bg-presentation px-3 py-2 text-black dark:text-white md:relative sm:flex-row gap-1 sm:gap-0"
    >
      <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-start sm:gap-4 z-30">
        <div 
          id="banner-left-portal" 
          className="flex min-w-[max-content] items-center scale-[0.85] origin-right sm:scale-100 sm:origin-left"
        ></div>
        <div className="scale-[0.85] origin-left sm:scale-100">
          <TestingVersion />
        </div>
      </div>
      <div
        className={cn(
          'flex-1 order-first w-full sm:order-none whitespace-pre-line text-center text-sm text-black dark:text-white md:text-base lg:text-lg',
          !banner.persistable && 'px-4',
        )}
        dangerouslySetInnerHTML={{ __html: formattedMessage }}
      ></div>
    </div>
  );
};
