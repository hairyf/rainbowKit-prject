import React from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'
import { i18n } from '../plugins'
import IconLanguage from './IconLanguage'

function LocaleDropdown() {
  const { t } = useTranslation()
  const langs = [
    { label: t('langs.en'), value: 'en' },
    { label: t('langs.fr'), value: 'fr' },
  ]
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          <IconLanguage />
          {t('config.name')}
        </Button>
      </DropdownTrigger>
      <DropdownMenu onAction={key => i18n.changeLanguage(key as string)} aria-label="Static Actions">
        {langs.map(l => <DropdownItem key={l.value}>{l.label}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  )
}

export default LocaleDropdown
