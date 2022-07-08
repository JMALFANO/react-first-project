import classNames from "classnames";
import React from "react";

const Notification = ({
  variant = "info",
  title,
  message,
  className,
  ...props
}: {
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  message?: string;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classNames(
      `flex min-h-[3.5rem] w-80 rounded-xl border border-solid p-4 ${className}`,
      {
        success: "border-success bg-success-lighter",
        error: "border-error bg-error-lighter",
        warning: "border-warning bg-warning-lighter",
        info: "border-info bg-info-lighter",
      }[variant]
    )}
    {...props}
  >
    <div className="mt-1 pl-1">
      <svg
        className={classNames(
          "h-5 w-5",
          {
            success: "text-success-darker",
            error: "text-error-darker",
            warning: "text-warning-darker",
            info: "text-info-darker",
          }[variant]
        )}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12,2 C14.6708984,2 17.1826172,3.0400391 19.0712891,4.9291992 C22.9697266,8.828125 22.9697266,15.171875 19.0712891,19.0708008 C17.1826172,20.9599609 14.6708984,22 12,22 C9.3291016,22 6.8173828,20.9599609 4.9287109,19.0708008 C1.0302734,15.171875 1.0302734,8.828125 4.9287109,4.9291992 C6.8173828,3.0400391 9.3291016,2 12,2 Z M12,3 C9.5957031,3 7.3359375,3.9360352 5.6357422,5.6362304 C2.1269531,9.1450195 2.1269531,14.8549804 5.6357422,18.3637695 C7.3359375,20.0639648 9.5957031,21 12,21 C14.4042969,21 16.6640625,20.0639648 18.3642578,18.3637696 C21.8730469,14.8549805 21.8730469,9.1450196 18.3642578,5.6362305 C16.6640625,3.9360352 14.4042969,3 12,3 Z M7.7578126,7.7573242 C7.953125,7.5620117 8.2695313,7.5620117 8.4648438,7.7573242 L8.4648438,7.7573242 L12,11.2929077 L15.5351563,7.7573243 C15.7304687,7.5620118 16.046875,7.5620119 16.2421875,7.7573243 C16.4375,7.9526367 16.4375,8.269043 16.2421875,8.4643555 L16.2421875,8.4643555 L12.7069702,12 L16.2421874,15.5356446 C16.4374999,15.730957 16.4374999,16.0473633 16.2421874,16.2426758 C16.1445312,16.3403321 16.0166015,16.3891602 15.8886718,16.3891602 C15.7607421,16.3891602 15.6328124,16.340332 15.5351562,16.2426758 L15.5351562,16.2426758 L12,12.7070923 L8.4648437,16.2426758 C8.3671875,16.3403321 8.2392578,16.3891602 8.11132812,16.3891602 C7.9833984,16.3891602 7.8554687,16.340332 7.7578125,16.2426758 C7.5625,16.0473633 7.5625,15.730957 7.7578125,15.5356445 L7.7578125,15.5356445 L11.2930298,12 L7.7578126,8.4643554 C7.5625001,8.269043 7.5625002,7.9526367 7.7578126,7.7573242 Z"
        ></path>
      </svg>
    </div>
    <div className="flex flex-col pl-3">
      <h4 className="font-headline text-base font-bold">{title}</h4>
      <p className="text-sm font-light">{message}</p>
    </div>
  </div>
);

export default Notification;
