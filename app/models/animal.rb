class Animal < ActiveRecord::Base
  has_many :sightings
  validates :common_name, :latin_name, :kingdom, presence: true
  validates :common_name, length: { minimum: 1 }
  validates :latin_name, length: { minimum: 1 }
  validates :kingdom, length: { minimum: 1 }
end
