// Plugin contributed by VonIthipathachai

ExperienceCalculator._getNoDamageExperience = function(data) {
		var baseExp = 1;
		var exp = this._getExperience(data, baseExp);

		return this._getValidExperience(exp);
	},

ExperienceCalculator._getNormalValue = function(data) {
		var baseExp = 10;
		var exp = this._getExperience(data, baseExp);

		return this._getValidExperience(exp);
	},

ExperienceCalculator._getExperience = function(data, baseExp) {
		var n;
		var lv = data.passive.getLv() - data.active.getLv();

		if (data.active.getClass().getClassRank() === ClassRank.HIGH && data.passive.getClass().getClassRank() === ClassRank.LOW) {
			lv -= 20;
		}

		if (data.active.getClass().getClassRank() === ClassRank.LOW && data.passive.getClass().getClassRank() === ClassRank.HIGH) {
			lv = 20 - data.active.getLv();
		}

		if (data.passiveHp > 0) {
			// If the opponent cannot be beaten, add the level difference.
			n = baseExp + lv;
		} else {
			if (lv > 0) {
				// If the level is bigger than the opponent, increase by 3 according to the difference.
				n = lv * 3;
			}
			else {
				// If the level is smaller than the opponent, decrease by 3 according to the difference (Iv is minus so decrease).
				n = lv * 3;
			}

			n += baseExp;
		}
		return n;
	},

RestrictedExperienceControl._getMax = function(unit) {
		// There are 4 parameters to rise.
		return 4;
    }
