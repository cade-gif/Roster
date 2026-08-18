import { useState, type FormEvent } from 'react'
import '../styles/auth.css'
import './ManageModal.css'

interface ManageModalProps {
  label: string
  onClose: () => void
}

function pluralize(label: string) {
  return label.endsWith('y') ? `${label.slice(0, -1)}ies` : `${label}s`
}

function ManageModal({ label, onClose }: ManageModalProps) {
  const [mode, setMode] = useState<'add' | 'edit'>('add')
  const [value, setValue] = useState('')
  const pluralLabel = pluralize(label)

  function handleAdd(e: FormEvent) {
    e.preventDefault()
    // Not wired to the backend yet - this just closes the modal for now.
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Manage {label}</h2>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="modal-tabs">
          <button
            type="button"
            className={mode === 'add' ? 'modal-tab modal-tab-active' : 'modal-tab'}
            onClick={() => setMode('add')}
          >
            Add {label}
          </button>
          <button
            type="button"
            className={mode === 'edit' ? 'modal-tab modal-tab-active' : 'modal-tab'}
            onClick={() => setMode('edit')}
          >
            Edit {pluralLabel}
          </button>
        </div>

        {mode === 'add' ? (
          <form className="modal-form" onSubmit={handleAdd}>
            <input
              className="auth-input"
              type="text"
              placeholder={`${label} details`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="auth-btn-primary" type="submit">
              Save
            </button>
          </form>
        ) : (
          <div className="modal-empty">No {pluralLabel.toLowerCase()} yet.</div>
        )}
      </div>
    </div>
  )
}

export default ManageModal
