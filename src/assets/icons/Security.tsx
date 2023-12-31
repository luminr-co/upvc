import clsx from "clsx";

type Props={
  className?: string
  classNameCircle?: string
}
export default function Security({className, classNameCircle}:Props) {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="41" cy="41" r="39" stroke="#FEFEFE" strokeWidth="4" className={clsx(classNameCircle)}/>
      <path
        d="M39.74 24.2683L28.8511 29.1061C27.7311 29.6039 27 30.7239 27 31.9528V39.2639C27 47.8972 32.9733 55.9706 41 57.9306C49.0267 55.9706 55 47.8972 55 39.2639V31.9528C55 30.7239 54.2689 29.6039 53.1489 29.1061L42.26 24.2683C41.4667 23.9106 40.5333 23.9106 39.74 24.2683ZM41 40.8039H51.8889C51.0644 47.2128 46.7867 52.9217 41 54.7106V40.8194H30.1111V31.9528L41 27.115V40.8039Z"
        fill="#FEFEFE"
        className={clsx(className)}
      />
    </svg>
  );
}
