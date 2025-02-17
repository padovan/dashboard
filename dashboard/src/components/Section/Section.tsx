import type { ReactElement, ReactNode, ElementType } from 'react';
import { useMemo } from 'react';

import type { DialogTriggerProps } from '@radix-ui/react-dialog';

import type { ILinkWithIcon } from '@/components/LinkWithIcon/LinkWithIcon';
import LinkWithIcon from '@/components/LinkWithIcon/LinkWithIcon';

import CopyButton from '@/components/Button/CopyButton';

import { LinkIcon } from '@/components/Icons/Link';

export interface ISection {
  title: string;
  icon?: JSX.Element;
  subsections?: ISubsection[];
  eyebrow?: string | ReactElement;
}

export interface SubsectionLink extends ILinkWithIcon {
  wrapperComponent?: ElementType<{ children: ReactNode } & DialogTriggerProps>;
  copyValue?: string;
  children?: JSX.Element;
}
export interface ISubsection {
  infos: SubsectionLink[];
  title?: string;
}

export const Subsection = ({ infos, title }: ISubsection): JSX.Element => {
  const children: JSX.Element[] = useMemo(() => [], []);
  const items = useMemo(
    () =>
      infos.map(info => {
        const WrapperComponent = info.wrapperComponent;
        const LinkComponent = (
          <LinkWithIcon
            key={info.title?.toString()}
            title={info.title}
            link={info.link}
            linkComponent={info.linkComponent}
            linkText={info.linkText}
            unformattedTitle={info.unformattedTitle}
            icon={
              info.link && !info.icon ? (
                <LinkIcon className="text-xl text-blue" />
              ) : (
                info.icon
              )
            }
            onClick={info.onClick ?? undefined}
          />
        );

        if (info.children !== undefined) {
          children.push(info.children);
        } else {
          return (
            <div key={info.title} className="flex flex-row items-end">
              {WrapperComponent ? (
                <WrapperComponent asChild>{LinkComponent}</WrapperComponent>
              ) : (
                <>{LinkComponent}</>
              )}
              {info.copyValue && <CopyButton value={info.copyValue} />}
            </div>
          );
        }
      }),
    [infos, children],
  );
  return (
    <div>
      <span className="text-xl">{title}</span>
      <div className="grid grid-cols-2 gap-8 border-t border-darkGray py-8">
        {items}
      </div>
      <div className="w-[80vw]">{children}</div>
    </div>
  );
};

const Section = ({
  title,
  subsections,
  eyebrow,
  icon,
}: ISection): JSX.Element => {
  const sections = useMemo(
    () =>
      subsections?.map((subsection, index) => (
        <Subsection
          key={index}
          infos={subsection.infos}
          title={subsection.title}
        />
      )),
    [subsections],
  );
  return (
    <div className="flex flex-col gap-4 text-dimGray">
      <div className="flex flex-col gap-2">
        <span className="text-sm">{eyebrow}</span>
        <div className="flex flex-row gap-2">
          <span className="text-2xl font-bold">{title}</span>
          {icon}
        </div>
      </div>
      {sections}
    </div>
  );
};

export default Section;
