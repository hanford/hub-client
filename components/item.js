import React, { PureComponent } from 'react'
import moment from 'moment'
import { partial } from 'ap'

moment.locale('en', {
  calendar : {
    lastDay : '[Yesterday]',
    sameDay : '[Today]',
    nextDay : '[Tomorrow]',
    lastWeek : '[last] dddd',
    nextWeek : 'dddd',
    sameElse : 'L'
  }
})

export class Item extends PureComponent {

  log = (item) => {
    console.log(item)
  }

  render () {
    const { item } = this.props

    if (!item.delivery_schedule) {
      item.delivery_schedule = {}
    }

    let date = null

    if (item.delivery_schedule) {
      date = moment(item.delivery_schedule.deliver_on).calendar(Date.now())
    }

    return (
      <div>
        <div className='item' onClick={partial(this.log, item)}>
          <div className='first-col'>
            <a href={item.shipping_label_image_url} target='_blank'><img src={item.shipping_label_image_url} className='photoOfPackage' /></a>

            <div className='description'>
              <div>{`${item.description} from ${item.sender_description}`}</div>
              <div>Package Size: {item.package_size}</div>
              <div>
                {
                  item.delivery_schedule.deliver_time_begin
                  ? `Scheduled ${date} between ${item.delivery_schedule.deliver_time_begin % 12} - ${item.delivery_schedule.deliver_time_end % 12} pm`
                  : null
                }
              </div>
            </div>

          </div>
          <div className='state-label' style={{color: item.state === 'delivered' ? '#4caa51' : '#fec804'}}>{item.state}</div>
        </div>

        <style jsx>{`
          .item {
            padding: 1rem;
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            position: relative;
          }

          .first-col {
            display: flex;
          }

          .item:hover {
            cursor: pointer;
            background-color: rgba(0,0,0,0.025);
          }

          .photoOfPackage {
            max-width: 100%;
            width: 12rem;
            height: 12rem;
          }

          @media(max-width: 768px) {
            .photoOfPackage {
              width: 8rem;
              height: 8rem;
            }
          }

          .description {
            padding-left: 1rem;
          }

          .description > div {
            padding-bottom: 1rem;
          }

          .state-label {
            font-weight: 600;
            font-size: 1.2rem;
            position: absolute;
            top: 1rem;
            right: 1rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Item
