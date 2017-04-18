import Link from 'next/link'

export const ScheduleButton = () => (
  <div>
    <Link href='about' prefetch>
      <div className='fab'>&rarr;</div>
    </Link>
    <style jsx>{`
      .fab {
        position: fixed;
        transform: translateZ(0);
        bottom: 3rem;
        right: 3rem;
        border-radius: 50%;
        height: 5.6rem;
        width: 5.6rem;
        background: linear-gradient(to right, #ff512f, #f09819);
        border: 0px;
        box-shadow: 0 0 0.4rem rgba(0,0,0,.14), 0 0.4rem 0.8rem rgba(0,0,0,.25);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        font-weight: 600;
      }

      @media(max-width: 767px) {
        .fab {
          width: 100%;
          border-radius: 0;
          bottom: 0;
          right: 0;
        }
      }
    `}</style>
  </div>
)

export default ScheduleButton
