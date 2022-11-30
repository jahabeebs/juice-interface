import { InfoCircleOutlined } from '@ant-design/icons'
import { t, Trans } from '@lingui/macro'
import { Tooltip } from 'antd'

export default function ArchivedProjectsMessage({
  hidden,
}: {
  hidden: boolean
}) {
  if (!hidden) {
    return (
      <p className="mb-10 mt-5 max-w-[800px]">
        <Trans>
          <InfoCircleOutlined /> Archived projects haven't been modified or
          deleted on-chain. They can still be interacted with directly through
          the Juicebox contracts.
        </Trans>{' '}
        <Tooltip
          title={t`Project owners can archive their Juicebox projects in their project's settings page.`}
        >
          <span className="cursor-default underline decoration-grey-500 decoration-dotted underline-offset-2 dark:text-grey-400">
            <Trans>How do I archive a project?</Trans>
          </span>
        </Tooltip>
      </p>
    )
  }
  return null
}
