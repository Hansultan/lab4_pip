package lab4.area;

import javax.ejb.Stateless;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

@Stateless
public class AreaBean implements Area {

    @Override
    public boolean checkPoint(
            @DecimalMin(value = "-4") @DecimalMax(value = "4")
            @NotNull double x,
            @DecimalMin(value = "-5", inclusive = false) @DecimalMax(value = "5", inclusive = false)
            @NotNull double y,
            @DecimalMin(value = "-4") @DecimalMax(value = "4")
            @NotNull double r
    ) {
        if (r < 0) {
            return doCheckPoint(-x, -y, -r);
        }

        return doCheckPoint(x, y, r);
    }

    private boolean doCheckPoint(double x, double y, double r) {
        return ((x >= 0 && y >= 0 && x <= r && y <= r) ||
                (x <= 0 && y <= 0 && x * x + y * y < r * r) ||
                (x <= 0 && y >= 0 && y <= x / 2 + r / 2));
    }
}
