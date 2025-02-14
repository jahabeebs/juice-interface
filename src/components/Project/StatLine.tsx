import { Skeleton } from 'antd'
import TooltipLabel from '../TooltipLabel'

export default function StatLine({
  statLabel,
  statLabelTip,
  statValue,
  loading = false,
}: {
  statLabel: JSX.Element
  statLabelTip: JSX.Element
  statValue: JSX.Element
  loading?: boolean
}) {
  return (
    <div className="flex flex-nowrap items-baseline justify-between">
      <div className="text-sm font-medium uppercase text-grey-400 dark:text-grey-600">
        <TooltipLabel
          innerClassName="w-[400px]"
          label={statLabel}
          tip={statLabelTip}
        />
      </div>

      {loading ? (
        <div className="h-4 w-16">
          <Skeleton
            paragraph={{ rows: 1, width: '100%' }}
            title={false}
            active
          />
        </div>
      ) : (
        <div className="ml-2">{statValue}</div>
      )}
    </div>
  )
}
