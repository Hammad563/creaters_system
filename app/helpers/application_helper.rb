module ApplicationHelper

    def menu_items
        [
            {
                name: 'Dashboard',
                path: '/dashboard'
            },
            {
                name: 'Accounts',
                path: '/accounts'
            },
        ].map do |item|
            {
                name: item[:name],
                path: item[:path],
                active: current_page?(item[:path])
            }
        end
    end

end
