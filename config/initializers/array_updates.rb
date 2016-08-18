class Array
  def groupulate
    self.inject([ ]) do |result, n|
      if (result[-1] and result[-1][-1] == n - 1)
        result[-1] << n
      else
        result << [ n ]
      end
      result
    end
  end
end
