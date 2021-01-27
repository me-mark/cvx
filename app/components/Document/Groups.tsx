import './Groups.scss';
import iconGeneral from '../../images/icon-general.svg';
import iconApproval from '../../images/icon-approvals.svg';
import iconOther from '../../images/icon-other.svg';
import iconGeneralActive from '../../images/icon-general-active.svg';
import iconApprovalActive from '../../images/icon-approvals-active.svg';
import iconOtherActive from '../../images/icon-other-active.svg';
import iconTriangle1 from '../../images/icon-triangle-1.svg';

import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import makeSelectDocument from 'containers/Document/documentSelectors';
import { DocumentGroupModel } from 'containers/Document/documentTypes';
import { getDocumentGroupListAction, setCurrentDocumentGroup } from 'containers/Document/documentActions';

const DOCUMENT_GROUPS: GroupProps[] = [
  {
    total: 57,
    icon: iconApproval,
    iconActive: iconApprovalActive,
    name: 'All Documents',
    documentGroupId: 0,
  },
  {
    total: 8,
    icon: iconGeneral,
    iconActive: iconGeneralActive,
    name: 'General',
    documentGroupId: 1,
  },
  {
    total: 3,
    icon: iconApproval,
    iconActive: iconApprovalActive,
    name: 'Approvals',
    documentGroupId: 2,
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
  {
    total: 23,
    icon: iconOther,
    iconActive: iconOtherActive,
    name: 'Others',
    documentGroupId: 3
  },
]

interface GroupProps extends DocumentGroupModel {
  isActive?: boolean;
  icon: string;
  iconActive: string;
  onClick?: any;
}

const documentSelector = createStructuredSelector({
  document: makeSelectDocument(),
});

export function Groups(props) {
  const {
    document: { documentGroupList, currentDocumentGroup },
  } = useSelector(documentSelector);

  const defaultActiveGroupId = currentDocumentGroup?.documentGroupId;
  const [activeGroupId, setActiveGroupId] = useState<number>(defaultActiveGroupId!);
  const dispatch = useDispatch();

  const handleOnClickGroup = (groupId) => {
    setActiveGroupId(groupId);
    const currentDocumentGroup = documentGroupList!.find(o => o.documentGroupId === groupId);
    if (currentDocumentGroup) {
      dispatch(setCurrentDocumentGroup(currentDocumentGroup));
    }
  }

  useEffect(() => {
    dispatch(getDocumentGroupListAction())
  }, [])

  useEffect(() => {
    if (documentGroupList?.length && !currentDocumentGroup) {
      dispatch(setCurrentDocumentGroup(documentGroupList[0]));
    }
  }, [documentGroupList]);

  useEffect(()=>{
    if (currentDocumentGroup) {
      setActiveGroupId(currentDocumentGroup?.documentGroupId);
    }
  },[currentDocumentGroup])
  
  return (
    <div className="document-groups">
      {
        documentGroupList && documentGroupList.length > 0 && documentGroupList.map((group, index) =>
          <Group
            {...group}
            isActive={group.documentGroupId === activeGroupId}
            onClick={handleOnClickGroup}
            icon={DOCUMENT_GROUPS[index].icon}
            iconActive={DOCUMENT_GROUPS[index].iconActive}
            key={group.documentGroupId}
          />
        )
      }
    </div>
  )
}

function Group(props: GroupProps) {
  const { icon, iconActive, isActive, total, name, onClick, documentGroupId: documentGroupID } = props;
  return (
    <div className="document-groups__item">
      <div
        className={classNames("document-groups__item-content", { 'document-groups__active': isActive })}
        onClick={() => onClick(documentGroupID)}
      >
        <div className="document-groups__image" >
          {
            isActive ? <img src={iconActive} /> : <img src={icon} />
          }
        </div>
        <div>{name}&nbsp;</div>
        <div style={isActive ? { color: '#4A9CB4' } : {}}>{`(${total})`}</div>
      </div >
      {isActive && <img src={iconTriangle1} className="document-groups__active-image" />}
    </div>
  );
}