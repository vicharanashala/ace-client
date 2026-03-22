import { useEffect, useRef } from 'react';
import { XIcon } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { Button, cn } from '@librechat/client';
import { useGetBannerQuery } from '~/data-provider';
import store from '~/store';

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
      className="sticky top-0 z-20 flex w-full items-center justify-between bg-presentation px-3 py-2 text-black dark:text-white md:relative"
    >
      <div id="banner-left-portal" className="flex items-center min-w-[max-content] z-30"></div>
      <div
        className={cn(
          'flex-1 whitespace-pre-line text-center text-sm text-black dark:text-white md:text-base lg:text-lg',
          !banner.persistable && 'px-4',
        )}
        dangerouslySetInnerHTML={{ __html: formattedMessage }}
      ></div>
    </div>
  );
};
