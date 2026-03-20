import { OGDialog, DialogTemplate } from '@librechat/client';

const ImportantNoticeModal = ({
  open,
  onOpenChange,
  onAccept,
  onDecline,
}: {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onAccept: () => void;
  onDecline: () => void;
}) => {
  const handleOpenChange = (isOpen: boolean) => {
    if (open && !isOpen) {
      return;
    }
    onOpenChange(isOpen);
  };

  return (
    <OGDialog open={open} onOpenChange={handleOpenChange}>
      <DialogTemplate
        title=""
        className="w-11/12 max-w-xl sm:w-3/4 md:w-1/2 lg:w-2/5 p-2 sm:p-6"
        showCloseButton={false}
        showCancelButton={false}
        main={
          <section
            tabIndex={0}
            className="max-h-[80vh] overflow-y-auto px-2 py-4 flex flex-col items-center text-center"
          >
            <div className="mb-2 flex justify-center text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h2 className="text-xl font-bold text-red-600 mb-6 flex flex-col items-center justify-center gap-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">⚠️</span> Important Notice (Testing Version)
              </div>
              <div className="text-base font-semibold">ਜ਼ਰੂਰੀ ਸੂਚਨਾ (ਟੈਸਟਿੰਗ ਵਰਜਨ)</div>
            </h2>
            
            <div className="space-y-4 text-sm text-left text-text-primary px-4 bg-surface-secondary/30 rounded-lg py-4 shadow-sm w-full">
              {/* English Section */}
              <div className="space-y-3">
                <p>This application is currently under development and is provided only for testing and validation purposes.</p>
                <p>It is not a public advisory service and must not be relied upon for real-world farming decisions.</p>
                <p>Advisories are experimental and limited to paddy crops for selected states only.</p>
                <p>Weather data & market data are from authentic government sources.</p>
                <p className="font-bold text-center mt-2">By proceeding, you agree to use this app only as a tester.</p>
              </div>

              <div className="h-px bg-border-light my-4 w-full"></div>

              {/* Punjabi Section */}
              <div className="space-y-3">
                <p>ਇਹ ਐਪਲੀਕੇਸ਼ਨ ਵਰਤਮਾਨ ਵਿੱਚ ਵਿਕਾਸ ਅਧੀਨ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਟੈਸਟਿੰਗ ਅਤੇ ਪ੍ਰਮਾਣਿਕਤਾ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਪ੍ਰਦਾਨ ਕੀਤੀ ਗਈ ਹੈ।</p>
                <p>ਇਹ ਕੋਈ ਜਨਤਕ ਸਲਾਹਕਾਰੀ ਸੇਵਾ ਨਹੀਂ ਹੈ ਅਤੇ ਅਸਲ-ਸੰਸਾਰ ਦੇ ਖੇਤੀ ਫੈਸਲਿਆਂ ਲਈ ਇਸ 'ਤੇ ਭਰੋਸਾ ਨਹੀਂ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।</p>
                <p>ਸਲਾਹਕਾਰੀਆਂ ਪ੍ਰਯੋਗਾਤਮਕ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਚੁਣੇ ਹੋਏ ਰਾਜਾਂ ਲਈ ਝੋਨੇ ਦੀਆਂ ਫ਼ਸਲਾਂ ਤੱਕ ਸੀਮਤ ਹਨ।</p>
                <p>ਮੌਸਮ ਡੇਟਾ ਅਤੇ ਮਾਰਕੀਟ ਡੇਟਾ ਪ੍ਰਮਾਣਿਕ ਸਰਕਾਰੀ ਸਰੋਤਾਂ ਤੋਂ ਹਨ।</p>
                <p className="font-bold text-center mt-2">ਅੱਗੇ ਵਧ ਕੇ, ਤੁਸੀਂ ਇਸ ਐਪ ਨੂੰ ਸਿਰਫ਼ ਇੱਕ ਟੈਸਟਰ ਵਜੋਂ ਵਰਤਣ ਲਈ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ।</p>
              </div>
              
              <div className="h-px bg-border-light my-4 w-full"></div>

              <div className="text-xs text-center mt-4 text-text-secondary flex flex-col items-center justify-center gap-1">
                <span><span className="text-yellow-500">✉️</span> For any queries, suggestions and feedback, write to: email.annam.ai</span>
                <span>ਕਿਸੇ ਵੀ ਪ੍ਰਸ਼ਨ, ਸੁਝਾਅ ਅਤੇ ਫੀਡਬੈਕ ਲਈ, ਇੱਥੇ ਲਿਖੋ: email.annam.ai</span>
              </div>
            </div>
          </section>
        }
        buttons={
          <div className="flex flex-row w-full gap-4 mt-4 px-2 pb-2">
            <button
              onClick={onDecline}
              className="flex-1 flex h-12 items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white shadow hover:bg-red-700 focus:bg-red-700 transition-colors"
            >
              DECLINE
            </button>
            <button
              onClick={onAccept}
              className="flex-1 flex h-12 items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white shadow hover:bg-green-700 focus:bg-green-700 transition-colors"
            >
              I AGREE & PROCEED
            </button>
          </div>
        }
      />
    </OGDialog>
  );
};

export default ImportantNoticeModal;
