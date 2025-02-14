import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { PropsWithChildren } from 'react'

export default function FundingCycleDetailWarning({
  tooltipTitle,
  showWarning,
  children,
}: PropsWithChildren<{
  tooltipTitle?: string
  showWarning?: boolean
}>) {
  if (!showWarning) return <span>{children}</span>

  return (
    <div className="flex">
      <span className="font-medium">{children} </span>
      <span className="ml-2 text-warning-800 dark:text-warning-100">
        <Tooltip title={tooltipTitle} placement="top">
          <ExclamationCircleOutlined />
        </Tooltip>
      </span>
    </div>
  )
}
