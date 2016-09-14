class DropRegionsTable < ActiveRecord::Migration
  def change
    drop_table :regions
  end
end
