import Link from 'next/link'

export const FabButton = () => (
  <div>
    <Link href='schedule' prefetch>
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
        transition: all 0.2s linear;
        animation: scaleIn 0.25s linear;
      }

      .fab:active {
        transform: scale(0.9);
      }

      @keyframes scaleIn {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }
    `}</style>
  </div>
)

export default FabButton
