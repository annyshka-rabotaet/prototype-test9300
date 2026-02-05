import React from 'react'
import { Signature, Initials, TextIcon, Calendar, Reorder, ChevronDown } from './icons'
import './AddFieldsSidebar.css'

const UserAvatar = ({ initials, color }) => (
  <div className={`user-avatar color-${color}`}>
    <span className="avatar-text">{initials}</span>
  </div>
)

const FillableField = ({ icon: Icon, label, color = 1, fieldType }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'copy'
    e.dataTransfer.setData('application/json', JSON.stringify({
      type: fieldType,
      label: label,
      color: color
    }))
  }

  return (
    <div 
      className={`fillable-field color-${color}`}
      draggable="true"
      onDragStart={handleDragStart}
    >
      <Icon />
      <span className="field-label">{label}</span>
      <Reorder />
    </div>
  )
}

const AddFieldsSidebar = () => {
  return (
    <div className="add-fields-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Add fillable fields</h2>
      </div>
      
      <div className="sidebar-content">
        <div className="fields-section">
          <div className="person-card">
            <UserAvatar initials="NW" color={1} />
            <div className="person-info">
              <div className="person-name">You</div>
              <div className="person-email">noah.walker@sealdocs.com</div>
            </div>
            <button className="person-card-btn">
              <ChevronDown />
            </button>
          </div>
          
          <div className="fields-list">
            <FillableField icon={Signature} label="Signature" color={1} fieldType="signature" />
            <FillableField icon={Initials} label="Initials" color={1} fieldType="initials" />
            <FillableField icon={TextIcon} label="Text field" color={1} fieldType="text" />
            <FillableField icon={Calendar} label="Date" color={1} fieldType="date" />
            
            <button className="show-all-btn">
              <ChevronDown />
              <span>Show all</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFieldsSidebar
