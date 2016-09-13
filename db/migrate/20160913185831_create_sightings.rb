class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      t.references :animal, index: true, foreign_key: true
      t.date :date
      t.time :time
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps null: false
    end
  end
end
